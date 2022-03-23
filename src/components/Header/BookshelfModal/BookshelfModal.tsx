import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
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

export function BookshelfModal() {
  const { data: session } = useSession();
  const [bookshelfModal, setBookshelfModal] = useState(false);

  function handleIsBookshelfModalOpen() {
    if (!session) {
      setBookshelfModal(true);
    }
  }

  return (
    <AlertDialog.Root open={bookshelfModal}>
      <ModalTrigger>
        <Link href={session ? "/mybookshelf" : "/"}>
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
              signIn("google");
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
