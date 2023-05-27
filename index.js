class Hotel {
    Address;
    NumberOfRoom;
    #minFloor;
    #maxFloor;
    rooms;

    constructor(Address, NumberOfRoom, minFloor, maxFloor, rooms) {
        this.Address = Address;
        this.NumberOfRoom = NumberOfRoom;
        this.#maxFloor = maxFloor;
        this.#minFloor = minFloor;
        this.rooms = rooms;
    }

    printAdvertismen() {
        console.log("The hotel is in " + this.Address + " and it contains " + this.NumberOfRoom + " rooms.");
    }

    listBookedRooms() {
        for (let i=0; i<this.rooms.length; i++) {
            if (this.rooms[i].isBooked()==true) {
                this.rooms[i].printRoom();
            }
        }
    }
}

class Room {
    floorNum;
    roomNum;
    price;
    #isBooked;

    constructor(floorNum, roomNum, price, isBooked) {
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this.#isBooked = isBooked;
    }

    printRoom() {
        console.log("Room #: " + this.roomNum + "\nfloor #: " + this.floorNum 
        + "\nprice: " + this.price + "$");

        if (this.#isBooked) {
            console.log("booked");
        }
        else {
            console.log("NOT booked");
        }
    }

    book() {
        this.#isBooked = true;
    }

    isBooked() {
        return this.#isBooked;
    }
}

class RoomWithView extends Room {
    view;
    numberOfBeds;

    constructor(floorNum, roomNum, price, isBooked, view, numberOfBeds) {
        super(floorNum, roomNum, price, isBooked);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
    }

    printRoom() {
        super.printRoom();
        console.log("view: " + this.view + "\n# beds: " + this.numberOfBeds);
        console.log("*********************************");
    }
}

class SleepingRoom extends Room {
    personCapacity;

    constructor(floorNum, roomNum, price, isBooked, personCapacity) {
        super(floorNum, roomNum, price, isBooked);
        this.personCapacity = personCapacity;
    }

    printRoom() {
        super.printRoom();
        console.log("person capacity: " + this.personCapacity);
        console.log("*********************************");
    }

}

let r1 = new RoomWithView(1, 5, 6000, true, "sea", 2);
let r2 = new RoomWithView(2, 4, 8000, false, "forest", 2);
let r3 = new SleepingRoom(4, 8, 3000, true, 4);

const rooms = [r1, r2, r3];


let h1 = new Hotel("Hebron", 100, -1, 10, rooms);

for (let i=0; i<h1.rooms.length; i++) {
    h1.rooms[i].printRoom();
}

//h1.listBookedRooms();

/*h1.rooms[1].book();
h1.listBookedRooms();*/
