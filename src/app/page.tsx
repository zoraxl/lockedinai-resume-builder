"use client";
import { store } from "lib/redux/store";
import { Provider } from "react-redux";
import ImportResume from "resume-import/page";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="bg-dot mx-auto max-w-screen-2xl px-8 pb-32 text-gray-900 lg:px-12">
        <ImportResume />
      </main>
    </Provider>
  );
}
