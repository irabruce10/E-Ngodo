import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
export default function Auth() {
  return (
    <>
      <SignedOut>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
