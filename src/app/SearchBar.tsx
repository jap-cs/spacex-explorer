"use client"

import {usePathname, useRouter} from "next/navigation";

export function SearchBar() {
    const router = useRouter();
    const pathname = usePathname();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (e.target.value) {
            searchParams.set('name', e.target.value);
        } else {
            searchParams.delete('name');
        }

        router.replace(`${pathname}?${searchParams.toString()}`);
    }

    return <input type={'text'} onChange={onChange} />
}