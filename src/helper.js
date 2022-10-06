

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
        ...import.meta.env
    }

}

export function getFilteredMessages(messages, currentRoom) {

    let filteredMessages = messages.filter(msg => msg.to == currentRoom)

    return filteredMessages;
}