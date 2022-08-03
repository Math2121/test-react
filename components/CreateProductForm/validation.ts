import * as Yup from 'yup';
export const validationSchema = Yup.object({
    name:Yup.string().required('Nome e obrigatório'),
    price:Yup.string().required('Preço e obrigatório'),
    amount:Yup.string().required('Quantidade e obrigatório'),
})