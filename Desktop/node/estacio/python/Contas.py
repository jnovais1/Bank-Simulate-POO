import datetime
from Extrato import Extrato

class Conta:
    __numero_conta = 0
    def __init__(self, clientes, saldo):
        self.__saldo = saldo
        self.clientes = clientes
        self.abertura = datetime.datetime.today()
        self.extrato = Extrato()
        self.__numero_conta = Conta.__getNumeroConta()

    def __str__(self):
        return f"Conta {self.__numero_conta}"
    
    @property
    def saldo(self):
        return self.__saldo
    
    @classmethod        
    def __getNumeroConta(cls):
       cls.__numero_conta +=1
       return int(cls.__numero_conta)
    
    @saldo.setter
    def saldo(self, saldo):
        if (self.saldo < 0):
            print(f"saldo inválido")
        else:
            self.__saldo = saldo
    
    def _depositar(self, valor):
        self.__saldo+=valor
        self.extrato.transacoes.append(["DEPÓSITO ", valor, "Data: ", datetime.datetime.today()])
        print(f"{self} - Depósito no valor de {valor} / Saldo atual: {self.__saldo}")

    def _sacar(self,valor):
        if self.__saldo < valor:
            print(f"Tentativa de saque: {valor}. Saldo insuficiente.")
            return False
        else:
            self.__saldo -= valor
            self.extrato.transacoes.append(["SAQUE", valor, "Data", datetime.datetime.now()]) 
            print(f"{self} - Saque no valor de {valor} / Saldo Restante: {self.__saldo}")
            return True

    def transfereValor(self,contaDestino,valor):
      if self.__saldo < valor:
         print("Saldo insuficiente")
         return False
      else:
         self.__saldo -= valor
         self.extrato.transacoes.append(["TRANSFERENCIA", valor, "Data", datetime.datetime.today()])
         print(f"Transferência de {valor}, destino: {contaDestino}")
         contaDestino._depositar(valor)
         return True

    def imprimeDados(self):
        print(f"\nNúmero da conta: {self.__numero_conta}, saldo: {self.__saldo}\nExtrato:{self.extrato.imprimir()}")
        #for cliente in self.clientes:
            #print(f"Cliente: {cliente.nome}, CPF: {cliente.cpf}, endereço: {cliente.endereco}")