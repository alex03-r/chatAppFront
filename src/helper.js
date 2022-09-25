


     export  function getcurrentDateAndTime(){

        let date = new Date();
        let realDate = date.toLocaleString();
        let splitedrealDate = realDate.split(",")

        let currentDate = splitedrealDate[0];
        let currentTime = splitedrealDate[1];

        let splitedCurrentTime = currentTime.split(':')
        splitedCurrentTime.pop();

        let joinSplitedCurrentTime = splitedCurrentTime.join(":")

        return {
            date:currentDate,
            time:joinSplitedCurrentTime
        }

    }


    export function getFilteredMessages(messages, currentRoom) {

        let filteredMessages = messages.filter(msg => msg.to == currentRoom )

        return filteredMessages;
    }