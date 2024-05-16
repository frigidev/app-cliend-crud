import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordStrength(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if(!value){
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumber = /[0-9]+/.test(value);

        const hasSymbol = /[@#$&-+*?!_]+/.test(value);

        const range = /[\w@#$&-+*?!]{6,20}/.test(value);

        const validationPassword = hasUpperCase && hasLowerCase && 
        hasNumber && hasSymbol && range;

        return !validationPassword ? {passwordStrength:true} : null;
    }
}

export function createValidateCpf(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const valueCpf = control.value;

        if(valueCpf == null){
            return null;
        }

        const isCpf = validateCpf(valueCpf);

        return isCpf ? null : {errorCpf: true};
    }
}

function validateCpf(cpfStr: string): boolean {
    //verify if it is 11 digits
    const cpf = /^[\d]{11}$/

    if(!cpf.test(cpfStr)){
        return false;
    }

    let digitsCpf: number[] = [];

    //capture all the characters of the cpf as numbers
    for(let i=0; i<cpfStr.length; i++){
        digitsCpf[i] = Number(cpfStr.charAt(i));
    }

    //multiply all nine first digits of the CPF for weights 10 to 2
    //respectively and sum the result of the multiplications
    let sum = 0;
    let aux: number;
    let multiplier = 10;

    for(let i=0; i<9; i++){
        aux = digitsCpf[i] * multiplier;
        sum += aux;
        multiplier--;
    }

    //module of division of the sum by 11
    //validates first check digit
    let rest = sum % 11;
    if(((rest == 0 || rest == 1) && digitsCpf[9] !== 0)
       || (rest > 1 && digitsCpf[9] !== (11 - rest))){
        return false;
    }
    
    //multiply all ten first digits of the CPF for weights 11 to 2
    //respectively and sum the result of the multiplications
    sum = 0;
    aux = 0;
    multiplier = 11;
    rest = 0;

    for(let i=0; i<10; i++){
        aux = digitsCpf[i] * multiplier;
        sum += aux;
        multiplier--;
    }

    //module of division of the sum by 11
    //validates second check digit
    rest = sum % 11;
    if(((rest == 0 || rest == 1) && digitsCpf[10] !== 0)
       || (rest > 1 && digitsCpf[10] !== (11 - rest))){
        return false;
    }

    return true;
}
