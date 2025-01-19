import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"





function MyAccount() {





    return (
        <div className="p-4">
            <h2 className="text-xl mb-8">Hesap Bilgilerim</h2>
            <div className=" w-60 sm:w-[500px] items-center sm:grid sm:grid-cols-2 gap-6 ">
                <div>
                    <Label htmlFor="name">Ad</Label>
                    <Input type="name" id="name" />
                </div>
                <div>
                    <Label htmlFor="surname">Soyad</Label>
                    <Input type="surname" id="surname" />
                </div>
                <div>
                    <Label htmlFor="email">Eposta</Label>
                    <Input type="email" id="email" />
                </div>
                <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input type="phone" id="phone" />
                </div>
            </div>
            <Button variant="outline" className="my-6" >Güncelle</Button>
        </div>



    )
}

export default MyAccount