import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { CircleCheck, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox"
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux'
import { getLogin } from '@/redux/loginSlice'
import { toast } from 'react-toastify';


function Login() {



    const loginSchema = z.object({
        email: z.string().email({ message: "Geçerli bir e-posta giriniz!" }),
        password: z.string().min(6, { message: "Şifre en az 6 karakter içermelidir!" })
            .regex(/[A-Z]/, { message: "Şifre en az bir büyük harf içermelidir!" })
            .regex(/[a-z]/, { message: "Şifre en az bir küçük harf içermelidir!" })
            .regex(/[0-9]/, { message: "Şifre en az bir rakam içermelidir!" }),
        isRemember: z.boolean().optional()
    })






    const { register, handleSubmit, formState: { errors }, control } = useForm({ resolver: zodResolver(loginSchema) });

    const [showPass, setShowPass] = useState(false);
    const { isLoading } = useSelector(store => store.login);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (data) => {
        const result = await dispatch(getLogin(data));


        if (getLogin.fulfilled.match(result)) {
            toast(<div className='flex gap-2 items-center'>

                <CircleCheck />
                <p>Başarıyla giriş yapıldı</p>
            </div>
            );
            toast(<div className='flex gap-2 items-center'>

                <CircleCheck />
                <p>Anasayfaya yönlendiriliyorsunuz</p>
            </div>
            );
            history.push("/");
        } else {
            toast.error("Giriş yapılamadı")
        }
    }






    return (
        <div className='py-8'>
            <Card className="w-full px-4 sm:w-[350px] m-auto">
                <CardHeader className='flex flex-row justify-center items-center gap-4'>
                    <CardTitle >Giriş Yap</CardTitle>
                    <Separator orientation="vertical" className='h-6' />
                    <CardTitle className='text-gray-400'><Link to="/register">Üye Ol</Link></CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email" className='py-2'>E-Posta Adresi</Label>
                                <Input id="email" placeholder="" {...register("email")} />
                                {errors.email && <p className="text-red-500 text-sm font-normal mt-1 text-left">{errors.email.message}</p>}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password" className='py-2'>Şifre</Label>
                                <div className='relative'>
                                    <Input id="password" type={showPass ? "text" : "password"} placeholder="" {...register("password")} />
                                    <div onClick={() => setShowPass(!showPass)} className='text-gray-500 text-xs cursor-pointer text-right absolute bottom-0 right-0 m-2'>
                                        {showPass ? <Eye /> : <EyeOff />}
                                    </div>
                                </div>



                                {errors.password && <p className="text-red-500 text-sm font-normal mt-1 text-left">{errors.password.message}</p>}


                            </div>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center space-x-2">

                                    <Controller
                                        name="isRemember"
                                        control={control}
                                        render={({ field }) => (
                                            <Checkbox
                                                id="isRemember"
                                                checked={field.value}
                                                onCheckedChange={(checked) => {
                                                    field.onChange(checked);



                                                }}
                                            />
                                        )}
                                    />



                                    <label
                                        htmlFor="isRemember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Beni Hatırla
                                    </label>

                                </div>

                                <p className='text-gray-500 text-xs cursor-pointer text-right hover:underline'>Şifremi unuttum</p>
                            </div>

                        </div>
                        <CardFooter className="flex flex-col justify-between w-full gap-4 px-0 pt-6">
                            <Button className='w-full' type='submit' >
                                {isLoading ? (<><Loader2 className="animate-spin" /> Giriş Yapılıyor...</>) : "Giriş Yap"}
                            </Button>
                            <div className='flex gap-2 items-center justify-center w-full'>
                                <Separator className='w-2/5' />
                                <p className='text-gray-500 text-xs'>VEYA</p>
                                <Separator className='w-2/5' />
                            </div>
                            <Button variant="outline" className='w-full' type="button">
                                <FcGoogle className="mr-2 h-4 w-4" />Google ile Giriş Yap
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login

