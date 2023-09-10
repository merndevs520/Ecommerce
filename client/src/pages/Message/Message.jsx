import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useAuthUser } from "../../hooks/useAuthUser";
import { useSelector } from "react-redux";

const Message = () => {
  const users = useSelector((state) => state.admin.users);
  const [active, setactive] = useState([]);
  const socket = useRef();
  const { user } = useAuthUser();
  const deshuser = users.filter((e) => e._id !== user._id);
  // console.log(users);
  console.log(active);

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", user);
  }, []);
  useEffect(() => {
    socket.current.on("userarray", (data) => {
      setactive(data);
    });
  }, [active]);

  return (
    <div className="   ">
      <p className="flex  gap-5">
        {deshuser?.map((item, key) => {
          return (
            <p key={key}>
              <p className="flex flex-col items-center gap-2 mt-3 justify-center relative">
                {active.some((e) => e._id == item._id) && (
                  <p className="absolute bottom-7 left-11 h-4 w-4 rounded-full bg-green-400 "></p>
                )}

                <img
                  className="w-10 rounded-full ring-2 ring-offset-indigo-400 ring-offset-2 border-white border-4 "
                  src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                  alt=""
                />
                <p>{item.username}</p>
              </p>
            </p>
          );
        })}
      </p>
    </div>
  );
};

export default Message;
