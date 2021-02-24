import React, {createContext, useContext} from 'react';
import {CommentServiceMock} from "./comment.service.mock";
import {PostServiceMock} from "./post.service.mock";
import {AndyService} from "../object-model/model";


const initial: AndyService = {
  post: PostServiceMock,
  comment: CommentServiceMock,
};

export const AndyContext = createContext<AndyService>(initial);
export const useAndy = (): AndyService => useContext<AndyService>(AndyContext);

type AndyProviderProps = {
  andy: AndyService;
  children: JSX.Element | JSX.Element[];
};

export const AndyProvider = (props: AndyProviderProps): JSX.Element => {
  let andy: AndyService = useContext(AndyContext);

  if (props.andy !== andy) {
    andy = props.andy || null;
  }

  return <AndyContext.Provider value={andy}>{props.children}</AndyContext.Provider>;
};
