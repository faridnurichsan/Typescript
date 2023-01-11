interface Mailable{
    send(email:string):boolean;
    queue(email:string):boolean;
}

interface FutureMailable extends Mailable{
    later(email: string, after:number):boolean
}

class Mail implements FutureMailable{
    later(email:string, after:number):boolean{
        console.log(`Send email to ${email} in ${after}ms`);
        return true;
    }
    send(email: string):boolean{
        console.log(`Send email to ${email}`);
        return true;
    }
    queue(email: string):boolean{
        console.log(`Queue email to ${email}`);
        return true;
    }
}

let mail = new Mail();

mail.later("test@test.com", 1000);
console.log(mail.send('faridnurichsand@gmail'));
