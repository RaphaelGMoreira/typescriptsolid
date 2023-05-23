import {
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/custumer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firtName: string, lastName: string, cpf: string) {
    this.firstName = firtName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
