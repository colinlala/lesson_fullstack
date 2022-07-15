import React, { useState, useEffect } from "react";
import { MemberEntity } from "../model/member";
import { getMembersCollection } from "../api/memberApi";

const useMemberCollection = () => {
    const [memberCollection, setMemberCollection] = useState<MemberEntity[]>(
        []
    );
    const loadMemberCollection = () => {
        getMembersCollection().then((memberCollection) =>
            setMemberCollection(memberCollection)
        );
    };
    return {
        memberCollection,
        loadMemberCollection,
    };
};

const MemberRow = ({ member }: { member: MemberEntity }) => (
    <tr>
        <td>
            <img src={member.avatar_url} style={{ maxWidth: "10rem" }} alt="" />
        </td>
        <td>
          <span>{member.id}</span>
        </td>
        <td>
          <span>{member.login}</span>
        </td>
    </tr>
)
const MemberTableComponent: React.FC<{}> = () => {
    // useMemberCollection   自定义hooks
    const { memberCollection, loadMemberCollection } = useMemberCollection();

    useEffect(() => {
        loadMemberCollection();
    }, []);
    return (
        <>
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
        </>
    );
};

export default MemberTableComponent;
