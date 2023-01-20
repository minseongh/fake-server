code = input()
insertList = []
for i in range(len(code) - 1):
    if (code[i] == '"' or code[i] == "'") and code[i + 1] == "/":
        insertList.append(i)
insertCount = len(insertList)
for i in range(insertCount):
    index = (insertCount - 1) - i
    code = code[:insertList[index] + 1] + "https://popcat.click" + code[insertList[index] + 1:]
print(code)