import React, { useState, useEffect } from "react";
import { MemberEntity } from "./model";
import { getMembersCollection } from "./api";

export default function Members() {
    // 自定义 hooks
    const useMemberCollection = () => {
        const [memberCollection, setMemberCollection] = useState<
            MemberEntity[]
        >([]);
        const loadMemberCollection = async () => {
            // 不是同一个
            const memberCollection = await getMembersCollection();
            setMemberCollection(memberCollection);
        };
        return {
            memberCollection,
            loadMemberCollection,
        };
    };

    const { memberCollection, loadMemberCollection } = useMemberCollection();
    useEffect(() => {
        loadMemberCollection();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {memberCollection.map((member) => (
                        <MemberRow key={member.id} member={member} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

interface MemberRowProps {
    member: MemberEntity;
}
const MemberRow: React.FC<MemberRowProps> = (props) => {
  const { member } = props
    return (
        <tr>
            <td>
                <img
                    src={member.avatar_url}
                    style={{ maxWidth: "10rem" }}
                    alt=""
                />
            </td>
            <td>
                <span>{member.id}</span>
            </td>
            <td>
                <span>{member.login}</span>
            </td>
        </tr>
    )
};
