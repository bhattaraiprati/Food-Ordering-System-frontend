import React, { createContext, Dispatch, SetStateAction } from "react";

type UserData = string; // Replace with your actual user data type
type RestaurantData = string;

interface IUserContextType {
  _user: UserData | null;
  _setUser: Dispatch<SetStateAction<UserData | null>>;
  _rest: RestaurantData | null;
  _setRest: Dispatch<SetStateAction<RestaurantData | null>>;
}

export const UserContext = createContext<IUserContextType>({
  _user: null,
  _setUser: () => {},
  _rest: null,
  _setRest: () => {},
});
