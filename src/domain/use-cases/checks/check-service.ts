

    interface CheckServiceUseCase {

        execute( url: string):Promise<boolean>;

    }

    type successCallback = () => void;
    type errorCallback = (error: string) => void;

    export class CheckService implements CheckServiceUseCase {

        constructor( 
            private readonly successCallback: successCallback,
            private readonly errorCallback: errorCallback
         ){}

        async execute( url: string):Promise<boolean>{

            try {
                const req = await fetch(url);
                if(!req.ok) throw new Error(`Error on check service ${url}`);
                this.successCallback();
                // console.log(`${url} is ok`);
                
                return true;
            } catch (error) {
                console.log(`${ error }`);
                this.errorCallback(`${ error }`);
                return false;
            }

        }   

    }