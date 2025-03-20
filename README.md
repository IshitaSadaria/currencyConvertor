# Currency Converter Project

## Overview
This project is a simple **currency converter** application built using **React** and **custom hooks**. It allows users to convert currencies from one type to another seamlessly.

## 📌 Table of Contents
- [Functionality](#functionality)
- [Workflow](#workflow)
- [Custom Hooks](#custom-hooks)
  - [useCurrencyInfo](#usecurrencyinfo)
  - [useConverter](#useconverter)
- [Why Custom Hooks?](#why-custom-hooks)
- [Benefits](#benefits)
- [Conclusion](#conclusion)

---

## 🚀 Functionality
This application provides the following features:
✅ Users can select the **source** and **target** currencies from a dropdown list.  
✅ Users can **enter the amount** to be converted.  
✅ The application displays the **converted amount** in the target currency.  
✅ It also shows the **current exchange rate**.

---

## 🔄 Workflow
### How the Currency Converter Works:
1. The user selects the **source** and **target** currencies from the dropdown.
2. The user enters the **amount** to be converted.
3. The application uses the **useCurrencyInfo** custom hook to fetch the current exchange rate from the API.
4. The application uses the **useConverter** custom hook to perform the currency conversion.
5. The converted amount and **exchange rate** are displayed.

---

## ⚙️ Custom Hooks
This project leverages **two custom hooks** to keep the logic modular and reusable.

### 🔹 useCurrencyInfo
This hook **fetches the current exchange rate** from an API. It takes the **source and target currencies** as arguments and returns the latest exchange rate.

### 🔹 useConverter
This hook performs the **currency conversion** based on the exchange rate received from `useCurrencyInfo`.

---

## ❓ Why Custom Hooks?
Custom hooks help in **encapsulating logic** and **improving code reusability**. Instead of writing API calls and conversion logic in components, we can keep them in separate hooks for better organization.

---

## 💡 Benefits
Using custom hooks in this project provides several advantages:
✅ **Modular Code** – The logic is well-structured and reusable.  
✅ **Easy Maintenance** – Updating or modifying the logic becomes simpler.  
✅ **Improved Performance** – Hooks help in better state management and optimization.  

---

## 🎯 Conclusion
This project demonstrates how **custom hooks** can be effectively used in a **React application**. By leveraging hooks, we ensure:
- **Better code organization**  
- **Improved reusability**  
- **Enhanced maintainability**  

This approach makes the application **scalable** and **efficient**. 🚀

