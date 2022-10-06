

export function getcurrentDateAndTime() {

    let date = new Date();
    let fullCurrentDate = date.toLocaleString();
    let splitedfullCurrentDate = fullCurrentDate.split(",")

    let currentDate = splitedfullCurrentDate[0];
    let currentTime = splitedfullCurrentDate[1];

    let splitedCurrentTime = currentTime.split(':')
    splitedCurrentTime.pop();

    let joinSplitedCurrentTime = splitedCurrentTime.join(":")

    return {
        date: currentDate,
        time: joinSplitedCurrentTime
    }
}


 export  function getEnvVariables(){

    return { 
        
        VITE_BASEURL: import.meta.env.VITE_BASEURL
    }

}

export function getFilteredMessages(messages, currentRoom) {

    let filteredMessages = messages.filter(msg => msg.to == currentRoom)

    return filteredMessages;
}