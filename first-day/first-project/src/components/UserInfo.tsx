import React from "react";

// child

/**
 *
 * props: {
 *  name: string,
 *  occupation: string,
 *  hobby: string
 * }
 *
 */

type UserInfoType = {
  name: string;
  occupation: string;
  hobby: string;
  age: number; 
};

export const UserInfo = ({ name, occupation, hobby, age }: UserInfoType) => {

  return (
    <>
      <h1 className="name" style={{ }}>{name}</h1>
      <p>{occupation}</p>
      <div>{hobby}</div>
      <div>{age}</div>
    </>
  );
};
