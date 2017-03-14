Welcome to "wake up" app!
===================

Architecture
-------------

![enter image description here](https://github.com/amaitreynov/nodered-project/blob/master/archi/archi.jpg)

WorkFlow
-------------
######Set Alarm
SmartPhone -> POST : setAlarm -> to NodeRed
NodeRed      -> POST : setAlarm -> to doorSensor

######Disable Alarm
SmarPhone -> POST : disableAlarm -> to NodeRed
NodeRed -> POST : disableAlarm -> to doorSensor

######Shut Alarm down
SmartPhone -> POST : snooze -> if : GET : isAuthorizedToSnooze -> to NodeRed
NodeRed -> GET : isAuthorizedToSnooze -> to doorSensor

######Door Is Open
DoorSensor -> POST : doorisopen -> to NodeRed
NodeRed -> POST : makecoffee -> to coffeemaker
NodeRed -> POST : doorisopen -> to SmartPhone (need shut alarm down)

Prerequisites
-------------
Need to install and run Node-Red on yout project
```
npm install -g node-red
node-red
```

Go to http://127.0.0.1:1880/ and import this node flow :

```json
JSON exemple
[  
   {  
      "id":"94f58d8e.57ce5",
      "type":"http in",
      "z":"e289053.92ef2f8",
      "name":"",
      "url":"",
      "method":"get",
      "x":185,
      "y":260,
      "wires":[  
         [  

         ]
      ]
   }
]
```

Ideas
----------

- <i></i>A web App for simulate the three devices (Smartphone, door sensor and coffee maker)
	- <i></i> A div for each devices
- <i></i>Funtions required :
	- <i></i> Set alarm
	- <i></i> Snooze alarm
	- <i></i> User can snooze ?
	- <i></i> Door is open !
	- <i></i> Make coffee :)

