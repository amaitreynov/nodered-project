Welcome to "Wake Me Up !" app!
===================

Architecture
-------------

![enter image description here](https://github.com/amaitreynov/nodered-project/blob/master/archi/archi.jpg)

WorkFlow
-------------
- <i></i>Set Alarm
	- <i></i> SmartPhone -> POST : setAlarm -> to NodeRed
	- <i></i> NodeRed      -> POST : setAlarm -> to doorSensor

- Disable Alarm
	- <i></i> SmarPhone -> POST : disableAlarm -> to NodeRed
	- <i></i> NodeRed -> POST : disableAlarm -> to doorSensor

- Shut Alarm down
	- <i></i> SmartPhone -> snooze alarm -> if : GET : isAuthorizedToSnooze -> to NodeRed
	- <i></i> NodeRed -> GET : isAuthorizedToSnooze -> to doorSensor (return true or false)

- Door Is Open
	- <i></i> DoorSensor -> POST : doorisopen -> to NodeRed
	- <i></i> NodeRed -> POST : makecoffee -> to coffeemaker
	- <i></i> NodeRed -> POST : doorisopen -> to SmartPhone (need shut alarm down)

Prerequisites
-------------
Need to install and run Node-Red on your project
```
npm install -g node-red
node-red
```

Go to http://127.0.0.1:1880/ and import all-flows.json (in node-red-flows directory) content.

Future features
----------
- <i></i> Make alarm ring with a cron (which will trigger alarm and make it ring on phone - or device)
- <i></i> Choose and upload personal alarm

Ideas
----------
- <i></i>A web App to simulate the three devices (Smartphone, door sensor and coffee maker)
	- <i></i> A div for each devices
- <i></i>Functions implemented :
	- <i></i> Set alarm
	- <i></i> Disable alarm
	- <i></i> Snooze alarm (simulated)
	- <i></i> User can snooze ?
	- <i></i> Door is open !
	- <i></i> Make coffee :)

    - <i></i> Bonus: ring alarm @ /smartphone/ring
