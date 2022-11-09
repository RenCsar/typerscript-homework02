import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './Opiniao.module.css'

const schema: any = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    content: yup.string().required()
}).required();

interface Props {
    errors?:boolean;
    content?: any;
    message?: any
}

export default function Opiniao(props: Props){
    const { register, handleSubmit, formState: {errors}} =
    useForm<any>({
      resolver: yupResolver(schema)  
    });    

    const onSubmitForm = ({data}:any) => console.log(data);

    return(
        <div className={styles.containerGeral}>
            
            <div className={styles.formu}>
            <h1>Deixe sua Opinião sobre a série</h1>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div className={styles.field}>
                        <label className={styles.label}>Nome</label>
                        <input type="text" {...register('name')}/>  
                        {/* <span>{errors.name?.message}</span> */}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Email</label>
                        <input type="email"{...register('email')}/>  
                        {/* <span>{errors.email?.message}</span> */}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Conteúdo</label>
                        <input type="text" {...register('content')}/>  
                        {/* <span>{errors.content?.message}</span> */}
                    </div>
                    <button type="submit">Enviar</button>
                </form> 
            </div>
            
        </div>
    );
}