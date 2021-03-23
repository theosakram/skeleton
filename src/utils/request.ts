import { Dispatch } from "react";
import { _axios } from "./_axios";
import { LoadErrorActions } from "../store/actions";

interface Param {
    url: string;
    dispatch: Dispatch<Action>;
}

interface DefaultReq {
    id?: number;
    type: string;
}

interface QueryReq extends DefaultReq {
    query?: string;
}

const { SET_ERROR, SET_LOADING } = LoadErrorActions;

export class Request {
    url: string;
    dispatch: Dispatch<Action>;
    constructor(param: Param) {
        this.url = param.url;
        this.dispatch = param.dispatch;
    }

    async get({ id, type }: DefaultReq) {
        try {
            this.dispatch({ type: SET_LOADING, value: true });

            const fixURL = id ? `${this.url}/${id}` : this.url;
            const { data } = await _axios.get(fixURL);

            this.dispatch({ type, value: data });
        } catch (error) {
            this.dispatch({ type: SET_ERROR, value: error.message });
        } finally {
            this.dispatch({ type: SET_LOADING, value: false });
        }
    }

    async query({ type, query }: QueryReq) {
        try {
            this.dispatch({ type: SET_LOADING, value: true });

            const fixURL = `${this.url}?${query}`;
            const { data } = await _axios.get(fixURL);

            this.dispatch({ type, value: data });
        } catch (error) {
            this.dispatch({ type: SET_ERROR, value: error.message });
        } finally {
            this.dispatch({ type: SET_LOADING, value: false });
        }
    }

    async remove({ id, type }: DefaultReq) {
        try {
            this.dispatch({ type: SET_LOADING, value: true });

            const fixURL = `${this.url}/${id}`;
            await _axios.delete(fixURL);

            this.dispatch({ type, value: id });
        } catch (error) {
            this.dispatch({ type: SET_ERROR, value: error.message });
        } finally {
            this.dispatch({ type: SET_LOADING, value: false });
        }
    }
}
