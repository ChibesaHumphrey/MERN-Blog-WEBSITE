"use client";
import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className=" min-h-screen mt-20">
      <div className="flex flex-col gap-10 p-4 max-w-3xl mx-auto  md:flex-row md:items-center">
        {/* Left */}
        <div className="flex-1">
          <p className=" text-sm text-justify">
            <span className=" font-bold text-2xl">Patience</span> is a vital
            virtue that fosters emotional health, understanding, and resilience.
            It allows individuals to make thoughtful decisions, endure
            challenges, and interact harmoniously with others.
            {/* By promoting tolerance and delaying immediate
            gratification, patience contributes to personal growth and societal
            harmony. Thus, it's an essential quality for achieving long-term
            goals and maintaining positive relationships. */}
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Username"
                required
                autoComplete="off"
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Email"
                required
                autoComplete="off"
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" />
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="Password"
                required
                autoComplete="off"
                shadow
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
            <div className="flex items-center gap-2">
              <Label htmlFor="agree" className="flex">
                Already have an Account ?&nbsp;
                <Link
                  to={"/sign-in"}
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Sign In
                </Link>
              </Label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
