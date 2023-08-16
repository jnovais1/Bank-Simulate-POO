class Extrato:
    def __init__(self):
        self.transacoes = []

    def imprimir(self):
        result = f"\n"
        for p in self.transacoes:
             result += f"{p[0]:15s} {p[1]:10.2f} {p[2]:10s} {p[3].strftime('%d/%b/%y')}\n"
        return result