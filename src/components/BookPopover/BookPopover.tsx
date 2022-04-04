import { BookInfo, RootState } from "../../store/types";
import { database } from "../../services/firebase/clientApp";
import { toast } from "react-toastify";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";
import * as Popover from "@radix-ui/react-popover";
import {
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "./BookPopoverStyles";

type BookPopoverProps = {
  id: string;
  volumeInfo: BookInfo;
  trigger: string;
};

export function BookPopover({ id, volumeInfo, trigger }: BookPopoverProps) {
  const dispatch = useDispatch<Dispatch<Action>>();

  const checkedOptState = useSelector((state: RootState) => {
    return state.checkOpt;
  });

  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });

  function changeCheckedOptState() {
    if (checkedOptState == "toReadOpt") {
      dispatch({ type: "NONE" });
      setTimeout(() => {
        dispatch({ type: "TO_READ" });
      }, 0.1);
    } else if (checkedOptState == "readingOpt") {
      dispatch({ type: "NONE" });
      setTimeout(() => {
        dispatch({ type: "READING" });
      }, 0.1);
    } else if (checkedOptState == "readOpt") {
      dispatch({ type: "NONE" });
      setTimeout(() => {
        dispatch({ type: "READ" });
      }, 0.1);
    }
  }

  async function addBookBookshelf(add: string) {
    const userRef = doc(
      database,
      "users",
      isSignedIn ? isSignedIn.uid : "none"
    );

    const qToRead = query(
      collection(userRef, "toReadBooks"),
      where("title", "==", volumeInfo.title)
    );

    const qReading = query(
      collection(userRef, "readingBooks"),
      where("title", "==", volumeInfo.title)
    );

    const qRead = query(
      collection(userRef, "readBooks"),
      where("title", "==", volumeInfo.title)
    );

    const querySnapshotToRead = await getDocs(qToRead);
    const querySnapshotReading = await getDocs(qReading);
    const querySnapshotRead = await getDocs(qRead);

    querySnapshotToRead.forEach((document) => {
      deleteDoc(doc(userRef, "toReadBooks", document.id));

      deleteDoc(doc(userRef, "readingBooks", document.id));

      deleteDoc(doc(userRef, "readBooks", document.id));
    });

    querySnapshotReading.forEach((document) => {
      deleteDoc(doc(userRef, "toReadBooks", document.id));

      deleteDoc(doc(userRef, "readingBooks", document.id));

      deleteDoc(doc(userRef, "readBooks", document.id));
    });

    querySnapshotRead.forEach((document) => {
      deleteDoc(doc(userRef, "toReadBooks", document.id));

      deleteDoc(doc(userRef, "readingBooks", document.id));

      deleteDoc(doc(userRef, "readBooks", document.id));
    });

    try {
      await setDoc(
        doc(
          userRef,
          add,
          `${new Date().getFullYear()}${("0" + new Date().getMonth()).slice(
            -2
          )}${("0" + new Date().getDate()).slice(-2)}${(
            "0" + new Date().getHours()
          ).slice(-2)}${("0" + new Date().getMinutes()).slice(-2)}${(
            "0" + new Date().getSeconds()
          ).slice(-2)} - ${volumeInfo.title}`
        ),
        {
          id,
          volumeInfo,
          title: volumeInfo.title,
        },
        { merge: true }
      ).then(() => {
        toast.success(`${volumeInfo.title} added to your bookshelf.`, {
          theme: "colored",
        });
      });
    } catch {
      toast.error(
        `Something went wrong. It was not possible to add ${volumeInfo.title} to your bookshelf.`
      );
    }
  }

  return (
    <Popover.Root>
      <PopoverTrigger asChild={true}>
        <div>{trigger}</div>
      </PopoverTrigger>
      <Popover.Anchor />
      <PopoverContent>
        <PopoverClose>
          <span
            className="option"
            onClick={() => {
              if (isSignedIn) {
                addBookBookshelf("toReadBooks").then(() =>
                  changeCheckedOptState()
                );
              }
            }}
          >
            To read
          </span>
        </PopoverClose>
        <PopoverClose>
          <span
            className="option center"
            onClick={() => {
              if (isSignedIn) {
                addBookBookshelf("readingBooks").then(() =>
                  changeCheckedOptState()
                );
              }
            }}
          >
            Reading
          </span>
        </PopoverClose>
        <PopoverClose>
          <span
            className="option"
            onClick={() => {
              if (isSignedIn) {
                addBookBookshelf("readBooks").then(() =>
                  changeCheckedOptState()
                );
              }
            }}
          >
            Read
          </span>
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Root>
  );
}
