from Contas import Conta
from Cliente import Cliente

cliente1 = Cliente(0, "Maria", "Rua 1")
cliente2 = Cliente(1, "joao", "Rua 2")

cliente3 = Cliente(2, "Katsilis", "Rua 3")
cliente4 = Cliente(3, "Walter", "Rua 4")

conta1 = Conta([cliente1, cliente2], 100)
conta2 = Conta([cliente3, cliente4], 0)

conta1._depositar(100)
conta1._sacar(50)
conta1.imprimeDados()
conta1.extrato.imprimir()


#conta2.extrato.imprimir()
#conta1.imprimeDados()
#conta2.imprimeDados()