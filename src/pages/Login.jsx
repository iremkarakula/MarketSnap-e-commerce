import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox"
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux'
import { login } from '@/redux/userSlice'


function Login() {



    const loginSchema = z.object({
        email: z.string().email({ message: "Geçerli bir e-posta giriniz!" }),
        password: z.string().min(6, { message: "Şifre en az 6 karakter içermelidir!" })
            .regex(/[A-Z]/, { message: "Şifre en az bir büyük harf içermelidir!" })
            .regex(/[a-z]/, { message: "Şifre en az bir küçük harf içermelidir!" })
            .regex(/[0-9]/, { message: "Şifre en az bir rakam içermelidir!" }),
        remember: z.boolean().optional()
    })



    const [isLoading, setIsLoading] = useState(false);
    const [remember, setRemember] = useState(false);
    const { register, handleSubmit, formState: { errors }, control, watch } = useForm({
        defaultValues: {
            email: "",
            password: "",
            remember: false
        },
        resolver: zodResolver(loginSchema)
    });
    const history = useHistory();
    const [showPass, setShowPass] = useState(false);
    const dispatch = useDispatch();


    const onSubmit = async (data) => {
        setIsLoading(true)

        await axios.post("https://reqres.in/api/workintech", data)

            .then(res => {
                console.log(res.data);
                console.log(remember)

                toast.success("Başarıyla giriş yaptınız");
                toast.success("Anasayfaya yönlendiriliyorsunuz");
                history.push("/");
            }).catch(err => {
                console.log(err);
                toast.error("Giriş yapılamadı :(");
            })

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
                                        name="remember"
                                        control={control}
                                        render={({ field }) => (
                                            <Checkbox
                                                id="remember"
                                                checked={field.value}
                                                onCheckedChange={(checked) => {
                                                    field.onChange(checked);
                                                    setRemember(checked);

                                                }}
                                            />
                                        )}
                                    />



                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Beni Hatırla
                                    </label>

                                </div>

                                <p className='text-gray-500 text-xs cursor-pointer text-right hover:underline'>Şifremi unuttum</p>
                            </div>

                        </div>
                        <CardFooter className="flex flex-col justify-between w-full gap-4 px-0 pt-6">
                            <Button className='w-full' type='submit' onClick={() => dispatch(login())}>
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

