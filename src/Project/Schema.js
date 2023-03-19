import * as yup from 'yup'


export const Validationa = yup.object().shape({
    cHARLODNAME: yup.string().required('Required'),
    cARDNUMBER: yup.number().positive().integer().required('Required'),
    mM: yup.number().positive().integer().required('Required'),
    yY: yup.number().positive().integer().required('Required'),
    cVC: yup.number().positive().integer().required('Required')
})