"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { GiFoldedPaper, GiTalk } from "react-icons/gi";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { ToggleTheme } from "../ThemeSwitcher";
import { Button } from "@nextui-org/react";

const AvatarDropdown = () => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">zoey@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}


export function NavbarComponent() {

  const isLogged = false;

  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/" className="text-black dark:text-white">
            <GiFoldedPaper size={45} />
            <p className="hidden sm:block font-bold text-inherit">Origamia</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3" justify="center">
          <NavbarItem>
            <Link href="#" className="text-black dark:text-white flex items-center gap-2">
              <MdOutlineProductionQuantityLimits />
              <span>Produtos</span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-black dark:text-white flex items-center gap-2">
              <GiTalk />
              <span>Contato</span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-black dark:text-white flex items-center gap-2">
              <RiTeamFill />
              <span>Sobre</span>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<FaSearch size={18} />}
          type="search"
        />
        <ToggleTheme />
        {isLogged ? (
          <AvatarDropdown />
        ): (<Link href="/Login"><Button variant="flat" color="primary">Entrar</Button></Link>)}

    </NavbarContent>
    </Navbar >
  );
}
