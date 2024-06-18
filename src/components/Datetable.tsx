"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/app/utils/supabase/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

// キャンプ情報の型を定義
interface CampInfo {
  address: string
  area: string
  camp_name: string
  created_at: string
  id: number
  price: string
  reception_time: string
  spa: string
}

const Datetable = () => {
  const [camps, setCamps] = useState<CampInfo[]>([]);
  const [filteredCamps, setFilteredCamps] = useState<CampInfo[]>([]);
  const [region, setRegion] = useState<string>("");
  const supabase = createClient();

  useEffect(() => {
    const fetchCamps = async () => {
      const { data: camps, error } = await supabase.from("camp_info").select();

      if (error) {
        console.error("キャンプ情報の取得でエラーが発生しました", error);
        return;
      }

      if (camps) {
        setCamps(camps);
        setFilteredCamps(camps);
      }
    };

    fetchCamps();
  }, []);

  useEffect(() => {
    if (region === "") {
      setFilteredCamps(camps);
    } else {
      setFilteredCamps(camps.filter((camp) => camp.area === region));
    }
  }, [region, camps]);

  return (
    <main>
      <div>
        <Button onClick={() => setRegion("")}>全て</Button>
        <Button onClick={() => setRegion("道北")}>道北</Button>
        <Button onClick={() => setRegion("道東")}>道東</Button>
        <Button onClick={() => setRegion("道南")}>道南</Button>
        <Button onClick={() => setRegion("道央")}>道央</Button>
      </div>
      <Table>
        <TableCaption>camping touring</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>キャンプ場名</TableHead>
            <TableHead>受付時間</TableHead>
            <TableHead>値段</TableHead>
            <TableHead>住所</TableHead>
            <TableHead>最寄りの温泉</TableHead>
            <TableHead>地域</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCamps.map((camp) => (
            <TableRow key={camp.id}>
              <TableCell>{camp.camp_name}</TableCell>
              <TableCell>{camp.address}</TableCell>
              <TableCell>{camp.price}</TableCell>
              <TableCell>{camp.reception_time}</TableCell>
              <TableCell>{camp.spa}</TableCell>
              <TableCell>{camp.area}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default Datetable;
