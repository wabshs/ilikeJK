import * as axios from 'axios'
import {AxiosRequestConfig} from "axios";

declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>
    }
}
