expenses = []
print("Welcome to Expense Tracker 💸")

while(True):
    print("\n======== MENU ========")
    print("1. Add Expense")
    print("2. View All Expenses")
    print("3. View Total Spending")
    print("4. Exit")
    print("======================\n")

    choice = int(input("Enter your choice (1-4): "))

    if(choice == 1):
        date = input("Enter date (DD-MM-YYYY): ")
        category = input("Enter category (e.g., Food, Transport): ")
        description = input("Enter description: ")
        amount = float(input("Enter amount: "))

        expense = {
            "date": date,
            "category": category,
            "description": description,
            "amount": amount
        }
        expenses.append(expense)
        print("Expense added successfully!")

    elif(choice == 2):
        if(len(expenses) == 0):
            print("No expenses added.")
        else:
            count = 1
            print("\n===== Your expenses are =====")
            for i in expenses:
                print(f"{count}. {i['date']}, {i['category']}, {i['description']}, {i['amount']}")
                count = count + 1
    
    elif(choice == 3):
        total = 0
        for i in expenses:
            total = total + i["amount"]
        print("Total Spending: ", total)
            
    elif(choice == 4):
        print("Exiting Expense Tracker. Goodbye!")
        break

    else:
        print("Invalid choice. Please try again.")
