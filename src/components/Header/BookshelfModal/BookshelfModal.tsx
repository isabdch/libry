import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/types";
import { signInGoogle } from "../../../services/auth/auth";
import Link from "next/link";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import {
  ModalAction,
  ModalCancel,
  ModalContent,
  ModalDescription,
  ModalOverlay,
  ModalTitle,
  ModalTrigger,
} from "./BookShelfModalStyles";
import { BsXLg } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

type BookshelfModalProps = {
  setMenu: (arg: boolean) => void;
};

export function BookshelfModal({ setMenu }: BookshelfModalProps) {
  const [bookshelfModal, setBookshelfModal] = useState(false);
  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });

  function handleIsBookshelfModalOpen() {
    if (isSignedIn == null) {
      setBookshelfModal(true);
    } else {
      setMenu(false);
    }
  }

  return (
    <AlertDialog.Root open={bookshelfModal}>
      <ModalTrigger>
        <Link href={isSignedIn ? "/mybookshelf" : "/"}>
          <a onClick={handleIsBookshelfModalOpen} className="myShelf">
            My bookshelf
          </a>
        </Link>
      </ModalTrigger>
      <AlertDialog.Portal>
        <ModalOverlay onClick={() => setBookshelfModal(false)} />
        <ModalContent
          onEscapeKeyDown={() => setBookshelfModal(false)}
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          <ModalTitle>You&apos;re not signed in</ModalTitle>
          <ModalDescription>
            You need to sign in to continue browsing.
          </ModalDescription>
          <ModalCancel
            onClick={() => {
              setBookshelfModal(false);
            }}
          >
            <BsXLg />
          </ModalCancel>
          <ModalAction
            onClick={() => {
              signInGoogle();
              setBookshelfModal(false);
            }}
          >
            Sign in with Google <FaGoogle className="googleIcon" />
          </ModalAction>
        </ModalContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
