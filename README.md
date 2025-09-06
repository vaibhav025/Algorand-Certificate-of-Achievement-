https://lora.algokit.io/testnet/application/745460949
<img width="1867" height="957" alt="image" src="https://github.com/user-attachments/assets/57bcfb01-1c81-4759-8497-5470ff572c9a" />

# 🎓 Certificate of Achievement dApp (Algorand)

A decentralized application (dApp) built on the **Algorand blockchain**, designed to issue, store, and verify digital certificates of achievement in a secure and transparent way.

---

## 📖 Project Description

This project demonstrates how to create and deploy a smart contract on Algorand using **TypeScript SDK**.  
The dApp issues certificates to students, storing both the **student's name** and the **award received** directly on the blockchain.

By using Algorand’s fast and low-cost transactions, the project ensures that records are **tamper-proof**, **transparent**, and **verifiable** by anyone.

---

## 🚀 What it does

- Issues a **certificate** to a student with their name and award.
- Saves the data in Algorand’s **global state** for permanence.
- Returns a confirmation message whenever a certificate is issued.
- Provides a public link to the deployed smart contract for verification.

---

## ✨ Features

- ✅ **Blockchain-backed certificates** — no more fake or lost certificates.  
- ✅ **Transparent & verifiable** — anyone can check authenticity via Algorand blockchain.  
- ✅ **Low-cost deployment** — thanks to Algorand’s efficiency.  
- ✅ **Beginner-friendly code** — simple TypeScript contract with clear logic.  
- ✅ **Easy customization** — adapt to different use cases like diplomas, awards, or credentials.  

---

## 🔗 Deployed Smart Contract

👉 Contract Address / Link: **Certificate of Achievement**

---

## 💻 Smart Contract Code

```typescript
/import { Contract, GlobalState } from "@algorandfoundation/algorand-typescript";

export class Certificate extends Contract {
  // Global state variables
  student = GlobalState<string>({
    initialValue : ''
  })
  award = GlobalState<string>({
    initialValue : ''
  });

  // Function to issue a certificate
  issueCert(name: string, award: string): string {
    this.student.value = name;
    this.award.value = award;
    return "Certificate: " + name + " got " + award;
  }
}

