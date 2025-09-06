import { Contract, GlobalState } from "@algorandfoundation/algorand-typescript";

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
