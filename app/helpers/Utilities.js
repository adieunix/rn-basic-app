import { AsyncStorage } from "react-native";
import base64 from 'base-64';
import * as constants from "./Constants";

function getAuthorizationHeaders() {
    var headers = new Headers();
    var base64encoded = base64.encode('ecstore:ecst0r32017');
    headers.set('Authorization', 'Basic ' + base64encoded);
    return headers;
}

function requestParamsCreator(paramsObject) {
    return "?request=" + JSON.stringify(paramsObject);
}

export async function getData(url, params) {
    var apiurl = url;
    if(params) {
        apiurl = apiurl + requestParamsCreator(params);
    }
    return new Promise(function (resolve, reject) {
        fetch(apiurl, {
            method: "GET",
            headers: getAuthorizationHeaders(),
            timeout: 1500
        }).then(function (response) {
            if (response.status == 200) {
                return (response.json());
            } else {
                reject();
            }
        }).then(function (json) {
            if (json.status_code == 1) {
                return (json.result);
            } else {
                reject();
            }
        }).then(function (result) {
            resolve(result)
        }).catch(function (error) {
            reject(error);
        });
    });
}

export async function postData(url, params) {
    return new Promise(function (resolve, reject) {
        var param = 'request=' + JSON.stringify(params);
        var form = new FormData();
        if (params) {
            form.append(param);
        }
        var headers = getAuthorizationHeaders();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        fetch(url, {
            method: "POST",
            headers: headers,
            timeout: 1500,
            body: param
        }).then(function (response) {
            if (response.status == 200) {
                return (response.json());
            } else {
                reject();
            }
        }).then(function (json) {
            if (json.status_code == 1) {
                return (json.result);
            } else {
                reject();
            }
        }).then(function (result) {
            resolve(result)
        }).catch(function (error) {
            reject(error);
        });
    });
}

