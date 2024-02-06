export interface ITinyReceipt {
  subscriptionId: number;
  receiptId: number;
  value: number;
  dueCode: string;
  dueDate: string;
  receptDate: string;
  paymentMethod: string;
  authenticationCode: string;
}
