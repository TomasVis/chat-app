export const ACTION_TYPES = {
  ADD_NEW_MESSAGE: "ADD_NEW_MESSAGE",
  CHANGE_ACTIVE_ROOM: "CHANGE_ACTIVE_ROOM",
  SAVE_FAKE_MESSAGES: "SAVE_FAKE_MESSAGES",
  SET_FAKE_MESSAGE_POSITION: "SET_FAKE_MESSAGE_POSITION",
  SET_IS_REQUESTING_ANSWER: "SET_IS_REQUESTING_ANSWER",
};

export const INITIAL_STATE = {
  messages: [],
  activeChatRoom: null,
  fakeMessages: [],
  isRequestAnswer: false,
  fakeMessagePossition: { 0: 0 },
};
export function reducer(state, { type, payload }) {
  switch (type) {
    case ACTION_TYPES.ADD_NEW_MESSAGE:
      return { ...state, messages: [...state.messages, payload] };
    case ACTION_TYPES.CHANGE_ACTIVE_ROOM:
      return { ...state, activeChatRoom: payload };
    case ACTION_TYPES.SAVE_FAKE_MESSAGES:
      return { ...state, fakeMessages: [...state.fakeMessages, payload] };
    case ACTION_TYPES.SET_FAKE_MESSAGE_POSITION:
      return {
        ...state,
        fakeMessagePossition: { ...state.fakeMessagePossition, ...payload },
      };
    case ACTION_TYPES.SET_IS_REQUESTING_ANSWER:
      return { ...state, isRequestAnswer: payload };
    default:
      return state;
  }
}
