import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { FcGoogle } from "react-icons/fc";




function Register() {
    const loginSchema = z.object({
        name: z.string().min(3, { message: "Adınız en az 3 karakter olmalıdır" }),
        surname: z.string().min(3, { message: "Soyadınız en az 3 karakter olmalıdır" }),
        email: z.string().email({ message: "Geçerli bir e-posta giriniz!" }),
        password: z.string().min(6, { message: "Şifre en az 6 karakter içermelidir!" })
            .regex(/[A-Z]/, { message: "Şifre en az bir büyük harf içermelidir!" })
            .regex(/[a-z]/, { message: "Şifre en az bir küçük harf içermelidir!" })
            .regex(/[0-9]/, { message: "Şifre en az bir rakam içermelidir!" }),
        confirmpassword: z.string()
    }).refine((data => data.password === data.confirmpassword), {
        message: "Şifreler eşleşmedi",
        path: ["confirmpassword"]
    })



    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            surname: "",
            phone: "",
            email: "",
            password: "",
            confirmpassword: ""
        },
        resolver: zodResolver(loginSchema)
    });
    const history = useHistory();
    const [showPass, setShowPass] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);



        await axios.post("https://reqres.in/api/workintech", data)
            .then(res => {
                console.log(res.data);

                toast.success("Başarıyla üye oldunuz");
                toast.success("Anasayfaya yönlendiriliyorsunuz");
                history.push("/");

            }).catch(err => {
                console.log(err);
                toast.error("Üye olunamadı :(");
            })
        setIsLoading(false);



    }
    return (
        <div className='py-8'>
            <Card className="w-[350px] m-auto">
                <CardHeader className='flex flex-row justify-center items-center gap-4'>
                    <CardTitle className='text-gray-400'><Link to="/login">Giriş Yap</Link></CardTitle>
                    <Separator orientation="vertical" className='h-6' />
                    <CardTitle>Üye Ol</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full items-center gap-4">
                            <div className='flex gap-4'>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name" className='py-2'>Ad</Label>
                                    <Input id="name" placeholder="" {...register("name")} />
                                    {errors.name && <p className="text-red-500 text-sm font-normal mt-1 text-left">{errors.name.message}</p>}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="surname" className='py-2'>Soyad</Label>
                                    <Input id="surname" placeholder="" {...register("surname")} />
                                    {errors.surname && <p className="text-red-500 text-sm font-normal mt-1 text-left">{errors.surname.message}</p>}
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone" className='py-2'>Telefon</Label>
                                <Input id="phone" placeholder="" {...register("phone")} />
                                {errors.phone && <p className="text-red-500 text-sm font-normal mt-1 text-left">{errors.phone.message}</p>}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email" className='py-2'>E-Posta</Label>
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
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="confirmpassword" className='py-2'>Şifreyi onayla</Label>
                                <Input id="confirmpassword" type="password" placeholder="" {...register("confirmpassword")} />

                                {errors.confirmpassword && <p className="text-red-500 text-sm font-normal mt-1 text-left">{errors.confirmpassword.message}</p>}
                            </div>
                        </div>
                        <CardFooter className="flex flex-col justify-between w-full gap-4 px-0 pt-6">
                            <Button className='w-full' type='submit' >
                                {isLoading ? (<><Loader2 className="animate-spin" /> Üye Olunuyor...</>) : "Üye Ol"}
                            </Button>
                            <div className='flex gap-2 items-center justify-center w-full'>
                                <Separator className='w-2/5' />
                                <p className='text-gray-500 text-xs'>VEYA</p>
                                <Separator className='w-2/5' />
                            </div>
                            <Button variant="outline" className='w-full' type="button">
                                <FcGoogle className="mr-2 h-4 w-4" />Google ile Üye Ol
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register