import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
//necesita acceder al RoomConsumer creado en el Context. pq es una funcion componente.
import { RoomConsumer } from '../Context';
import Loading from './Loading';


export default function RoomsContainer() {
    //Acceso al RoomConsumer
   return (
    <RoomConsumer>
      {value => {
        const { loading, setRoom, sortedRooms,rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} setRoom={setRoom} />
            {//pasa del value a RoomList setRoom y sortedRooms.
            }
          </>
        );
      }}
    </RoomConsumer>
  );
}


// import React from "react";
// import { withRoomConsumer } from "../Context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";

// function RoomContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <>
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms} />
//     </>
//   );
// }

// export default withRoomConsumer(RoomContainer);


