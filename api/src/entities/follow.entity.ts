import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {user} from "./user.entity";


@Entity("follow",{schema:"ig_clone" } )
@Index("followee_id",["followee",])
export class follow {

   
    @ManyToOne(type=>user, user=>user.follows,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'follower_id'})
    follower:user | null;


   
    @ManyToOne(type=>user, user=>user.follows2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'followee_id'})
    followee:user | null;


    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        
}
