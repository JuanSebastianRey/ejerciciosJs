export default function likes(likess) {
    if (likess >= 1000 && likess <= 9999) {
        return "" + likess[0] + "K"
    } else if (likess >= 10000 && likess <=999999){
        return "" + likess[0] + likess[1] + "K"
    }else if (likess >= 1000000) {
        return "" + likess[0] + "M"
    }
    else{
        return likess
    }
  }