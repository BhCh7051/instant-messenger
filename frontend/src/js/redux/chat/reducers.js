import {
  CHAT_USER,
  ACTIVE_USER,
  FULL_USER,
  ADD_LOGGED_USER,
  CREATE_GROUP,
} from "./constants";

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img7 from "../../assets/images/small/img-7.jpg";

const INIT_STATE = {
  active_user: 3,
  users: [
    //admin is sender and user in receiver
    {
      id: 0,
      name: "Pratik",
      profilePicture: avatar2,
      status: "online",
      unRead: 0,
      roomType: "contact",
      isGroup: false,
      messages: [
        {
          id: 1,
          message: "hi",
          time: "01:05",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          message: "hi patrick",
          time: "10.00",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 3,
          message: "how's going on your project?",
          time: "01:05",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 4,
          message: "Do you need any help?",
          time: "01:06",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 33,
          isToday: true,
        },
        {
          id: 5,
          message: "Let me know?",
          time: "01:06",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 6,
          message: "hi...Good Morning!",
          time: "09:05",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 7,
          message: "image",
          time: "10:30",
          userType: "receiver",
          isImageMessage: true,
          isFileMessage: false,
          imageMessage: [
            {
              image: img4,
            },
            {
              image: img7,
            },
          ],
        },
        {
          id: 8,
          message:
            "please, save this pictures to your file and give it to me after you have done with editing!",
          time: "10:31",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 9,
          message: "okay sure😄👍",
          time: "02:50",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
      ],
    },
    {
      id: 1,
      name: "Manish",
      profilePicture: avatar3,
      status: "away",
      unRead: 2,
      isGroup: false,
      messages: [
        {
          id: 33,
          isToday: true,
        },
        {
          id: 1,
          message: "hello",
          time: "10.00",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          message: "images",
          time: "10:30",
          userType: "receiver",
          isImageMessage: true,
          isFileMessage: false,
          imageMessage: [
            {
              image: img4,
            },
            {
              image: img7,
            },
          ],
        },
      ],
    },
    {
      id: 13,
      name: "General",
      profilePicture: "Null",
      unRead: 0,
      isGroup: true,
      messages: [
        {
          id: 33,
          isToday: true,
        },
        {
          id: 1,
          userName: "Jasmeet",
          message: "Hello send project images",
          time: "12:00",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          userName: "Sahil",
          message: "Images",
          time: "12:05",
          userType: "receiver",
          isImageMessage: true,
          isFileMessage: false,
          imageMessage: [
            {
              image: img6,
            },
          ],
        },
        {
          id: 3,
          userName: "admin",
          message: "Good Afternoon everyone !",
          time: "2:05",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 4,
          userName: "Rizvi",
          message: "This theme is Awesome!",
          time: "2:06",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
      ],
    },

    {
      id: 4,
      name: "Deepika",
      profilePicture: avatar4,
      status: "online",
      unRead: 0,
      isGroup: false,
      isTyping: true,
      messages: [
        {
          id: 1,
          userName: "Deepika",
          message: "Good Morning",
          time: "10:00",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          userName: "admin",
          message: "Good morning, How are you? What about our next meeting?",
          time: "10:02",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 33,
          isToday: true,
        },
        {
          id: 3,
          message: "Yeah everything is fine",
          time: "10:05",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 4,
          message: "& Next meeting tomorrow 10.00AM",
          time: "10:05",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 5,
          message: "Wow that's great",
          time: "10:06",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 6,
          message: "images",
          time: "10:30",
          userType: "receiver",
          isImageMessage: true,
          isFileMessage: false,
          imageMessage: [
            {
              image: img4,
            },
            {
              image: img7,
            },
          ],
        },
        {
          id: 7,
          userName: "admin",
          message: "Files",
          time: "01:30",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: true,
          fileMessage: "admin_v1.0.zip",
          size: "12.5 MB",
        },
        {
          id: 8,
          message: "",
          time: "10:05",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
          isTyping: true,
        },
      ],
    },
    {
      id: 5,
      name: "Designer",
      profilePicture: "Null",
      unRead: 1,
      isGroup: true,
      messages: [
        {
          id: 1,
          userName: "Deepika",
          message: "Hello send project images",
          time: "12:00",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 33,
          isToday: true,
        },
        {
          id: 2,
          userName: "Sahil",
          message: "Images",
          time: "12:05",
          userType: "receiver",
          isImageMessage: true,
          isFileMessage: false,
          imageMessage: [
            {
              image: img6,
            },
          ],
        },
        {
          id: 3,
          userName: "admin",
          message: "Images",
          time: "01:30",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: true,
          fileMessage: "Minible-Vertical.zip",
        },
        {
          id: 4,
          userName: "admin",
          message:
            "@Deepika please review this code, and give me feedback asap",
          time: "01:31",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 5,
          userName: "John",
          message: "Good Afternoon everyone !",
          time: "2:00",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 6,
          userName: "admin",
          message: "Good Afternoon everyone !",
          time: "2:05",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 9,
          userName: "John",
          message: "Next meeting tomorrow 10.00AM",
          time: "2:10",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
      ],
    },

    {
      id: 6,
      name: "Sahil",
      profilePicture: avatar6,
      status: "away",
      unRead: 0,
      isGroup: false,
      messages: [
        {
          id: 33,
          isToday: true,
        },
        {
          id: 1,
          message: "file",
          time: "01:16",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: true,
          fileMessage: "Minible-Vertical.zip",
        },
        {
          id: 2,
          message: "Okay 👍, let me check it and get back to you soon",
          time: "01:16",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
      ],
    },

    {
      id: 7,
      name: "Ashish",
      profilePicture: "Null",
      status: "online",
      unRead: 0,
      isGroup: false,
      isTyping: true,
      messages: [
        {
          id: 33,
          isToday: true,
        },
        {
          id: 1,
          message: "hi",
          time: "01:05",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          message: "Hello, how can i help you",
          time: "01:05",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 3,
          message: "",
          time: "01:05",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
          isTyping: true,
        },
      ],
    },

    {
      id: 8,
      name: "Manishi",
      profilePicture: "Null",
      status: "online",
      unRead: 0,
      isGroup: false,
      messages: [
        {
          id: 33,
          isToday: true,
        },
        {
          id: 1,
          message: "hi...Good Morning!",
          time: "09:05",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          message: "image",
          time: "10:30",
          userType: "sender",
          isImageMessage: true,
          isFileMessage: false,
          imageMessage: [
            {
              image: img4,
            },
            {
              image: img7,
            },
          ],
        },
        {
          id: 3,
          message:
            "please, save this pictures to your file and give it to me after you have done with editing!",
          time: "10:31",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 4,
          message: "Yeah, Everything is fine👍",
          time: "02:50",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
      ],
    },

    {
      id: 9,
      name: "Pankaj",
      profilePicture: avatar7,
      status: "away",
      unRead: 0,
      isGroup: false,
      messages: [
        {
          id: 33,
          isToday: true,
        },
        {
          id: 1,
          message: "hi...Good Morning!",
          time: "09:05",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          message: "image",
          time: "10:30",
          userType: "receiver",
          isImageMessage: true,
          isFileMessage: false,
          imageMessage: [
            {
              image: img4,
            },
            {
              image: img7,
            },
          ],
        },
        {
          id: 3,
          message:
            "please, save this pictures to your file and give it to me after you have done with editing!",
          time: "10:31",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 4,
          message: "Good Morning😄",
          time: "02:50",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
      ],
    },

    {
      id: 2,
      name: "Jatin",
      profilePicture: avatar2,
      status: "online",
      unRead: 0,
      isGroup: false,
      messages: [
        {
          id: 33,
          isToday: true,
        },
        {
          id: 1,
          message: "hello Admin",
          time: "08:00",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          message: "Good morning",
          time: "08:00",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 3,
          message: "is everything is fine ?",
          time: "08:00",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 4,
          message: "i can help you😊",
          time: "08:00",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 5,
          message: "Hi, How are You?",
          time: "08:00",
          userType: "receiver",
          isImageMessage: false,
          isFileMessage: false,
        },
      ],
    },

    {
      id: 3,
      name: "Ojaswi",
      profilePicture: avatar3,
      status: "away",
      unRead: 0,
      isGroup: false,
      messages: [
        {
          id: 33,
          isToday: true,
        },
        {
          id: 1,
          message: "hi",
          time: "12:00",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          message: "Did you finished it?",
          time: "12:00",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          message: "I've finished it! See you so",
          time: "12:05",
          userType: "receiver",
          isImageMessage: true,
          isFileMessage: false,
          imageMessage: [
            {
              image: img6,
            },
          ],
        },
      ],
    },

    {
      id: 14,
      name: "Sara",
      profilePicture: "Null",
      status: "offline",
      unRead: 0,
      isGroup: false,
      messages: [
        {
          id: 33,
          isToday: true,
        },
        {
          id: 1,
          message: "hi yana",
          time: "12:00",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
        {
          id: 2,
          message: "image",
          time: "12:05",
          userType: "receiver",
          isImageMessage: true,
          isFileMessage: false,
          imageMessage: [
            {
              image: img6,
            },
          ],
        },
        {
          id: 3,
          message: "Wow that's great",
          time: "12:00",
          userType: "sender",
          isImageMessage: false,
          isFileMessage: false,
        },
      ],
    },
  ],
  groups: [
    {
      gourpId: 1,
      name: "#General",
      profilePicture: "Null",
      isGroup: true,
      unRead: 0,
      desc: "General Group",
      members: [
        {
          userId: 1,
          name: "Sara",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 2,
          name: "Ojaswi",
          profilePicture: avatar8,
          role: "admin",
        },
        {
          userId: 3,
          name: "Jatin",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 4,
          name: "Pankaj",
          profilePicture: avatar7,
          role: null,
        },
        {
          userId: 5,
          name: "Yana",
          profilePicture: avatar3,
          role: null,
        },
        {
          userId: 6,
          name: "Sahil",
          profilePicture: avatar6,
          role: null,
        },
      ],
    },
    {
      gourpId: 2,
      name: "#Reporting",
      profilePicture: "Null",
      isGroup: true,
      unRead: 23,
      desc: "reporing Group here...",
      members: [
        {
          userId: 1,
          name: "Sara",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 2,
          name: "Ojaswi",
          profilePicture: avatar8,
          role: "admin",
        },
        {
          userId: 3,
          name: "Jatin",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 4,
          name: "Pankaj",
          profilePicture: avatar7,
          role: null,
        },
        {
          userId: 5,
          name: "Yana",
          profilePicture: avatar3,
          role: null,
        },
        {
          userId: 6,
          name: "Sahil",
          profilePicture: avatar6,
          role: null,
        },
      ],
    },
    {
      gourpId: 3,
      name: "#Designer",
      profilePicture: "Null",
      isGroup: true,
      unRead: 0,
      isNew: true,
      desc: "designers Group",
      members: [
        {
          userId: 1,
          name: "Sara",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 2,
          name: "Ojaswi",
          profilePicture: avatar8,
          role: "admin",
        },
        {
          userId: 3,
          name: "Jatin",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 4,
          name: "Pankaj",
          profilePicture: avatar7,
          role: null,
        },
        {
          userId: 5,
          name: "Yana",
          profilePicture: avatar3,
          role: null,
        },
        {
          userId: 6,
          name: "Sahil",
          profilePicture: avatar6,
          role: null,
        },
      ],
    },
    {
      gourpId: 4,
      name: "#Developers",
      profilePicture: "Null",
      isGroup: true,
      unRead: 0,
      desc: "developers Group",
      members: [
        {
          userId: 1,
          name: "Sara",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 2,
          name: "Ojaswi",
          profilePicture: avatar8,
          role: "admin",
        },
        {
          userId: 3,
          name: "Jatin",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 4,
          name: "Pankaj",
          profilePicture: avatar7,
          role: null,
        },
        {
          userId: 5,
          name: "Yana",
          profilePicture: avatar3,
          role: null,
        },
        {
          userId: 6,
          name: "Sahil",
          profilePicture: avatar6,
          role: null,
        },
      ],
    },
    {
      gourpId: 5,
      name: "#Project-aplha",
      profilePicture: "Null",
      isGroup: true,
      unRead: 0,
      isNew: true,
      desc: "project related Group",
      members: [
        {
          userId: 1,
          name: "Sara",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 2,
          name: "Ojaswi",
          profilePicture: avatar8,
          role: "admin",
        },
        {
          userId: 3,
          name: "Jatin",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 4,
          name: "Pankaj",
          profilePicture: avatar7,
          role: null,
        },
        {
          userId: 5,
          name: "Yana",
          profilePicture: avatar3,
          role: null,
        },
        {
          userId: 6,
          name: "Sahil",
          profilePicture: avatar6,
          role: null,
        },
      ],
    },
    {
      gourpId: 6,
      name: "#Snacks",
      profilePicture: "Null",
      isGroup: true,
      unRead: 0,
      desc: "snacks Group",
      members: [
        {
          userId: 1,
          name: "Sara",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 2,
          name: "Ojaswi",
          profilePicture: avatar8,
          role: "admin",
        },
        {
          userId: 3,
          name: "Jatin",
          profilePicture: "Null",
          role: null,
        },
        {
          userId: 4,
          name: "Pankaj",
          profilePicture: avatar7,
          role: null,
        },
        {
          userId: 5,
          name: "Yana",
          profilePicture: avatar3,
          role: null,
        },
        {
          userId: 6,
          name: "Sahil",
          profilePicture: avatar6,
          role: null,
        },
      ],
    },
  ],
  contacts: [
    {
      id: 1,
      name: "Ashish",
    },
    {
      id: 2,
      name: "Aditya",
    },
    {
      id: 3,
      name: "Chirag",
    },
    {
      id: 4,
      name: "Danish",
    },
    {
      id: 5,
      name: "Deepika",
    },
    {
      id: 6,
      name: "Ishan",
    },
    {
      id: 7,
      name: "Jaiman",
    },
    {
      id: 8,
      name: "Jasmeet",
    },
    {
      id: 9,
      name: "John",
    },
    {
      id: 10,
      name: "Mahi",
    },
    {
      id: 11,
      name: "Manish",
    },
    {
      id: 12,
      name: "Mitul",
    },
    {
      id: 13,
      name: "Ojaswi",
    },
    {
      id: 14,
      name: "Pallavi",
    },
    {
      id: 15,
      name: "Pankaj",
    },
    {
      id: 16,
      name: "Raj",
    },
    {
      id: 17,
      name: "Sara",
    },
    {
      id: 18,
      name: "Sachin",
    },
    {
      id: 19,
      name: "Sahil",
    },
    {
      id: 20,
      name: "Tarun",
    },
  ],
};

const Chat = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHAT_USER:
      return { ...state };

    case ACTIVE_USER:
      return {
        ...state,
        active_user: action.payload,
      };

    case FULL_USER:
      return {
        ...state,
        users: action.payload,
      };

    case ADD_LOGGED_USER:
      const newUser = action.payload;
      return {
        ...state,
        users: [...state.users, newUser],
      };

    case CREATE_GROUP:
      const newGroup = action.payload;
      return {
        ...state,
        groups: [...state.groups, newGroup],
      };

    default:
      return { ...state };
  }
};

export default Chat;
