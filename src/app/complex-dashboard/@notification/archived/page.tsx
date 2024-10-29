import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotification() {
    return(
        <Card>
            <div>Archived Notification</div>
            <Link href='/complex-dashboard'>Defalut</Link>
        </Card>
    )
};
