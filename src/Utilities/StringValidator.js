const regex = {
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    letters: /^[A-Za-z0-9]+$/
}

class StringValidator{

    static isValidEmail($this){
        return regex.email.test($this);
    }

    static removeSpace($this){
        return $this.replace(/ /g, "");
    }

    static upperCaseFirst($this){
        return $this.charAt(0).toUpperCase() + this.slice(1);
    }

    static isEmpty($this){
        return $this.removeSpace($this) === "" ? true : false;
    }

    static equalsIgnoreCase($this, $this2){
        return $this.toLocaleLowerCase() === ($this2 && $this2.toLocaleLowerCase());
    }

    static isAlphaNumeric($this){
        return regex.letters.test($this);
    }

}

export default StringValidator;