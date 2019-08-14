import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {user} from "./user.entity";
import {photo} from "./photo.entity";


@Entity("like",{schema:"ig_clone" } )
@Index("photo_id",["photo",])
export class like {

   
    @ManyToOne(type=>user, user=>user.likes,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'user_id'})
    user:user | null;


   
    @ManyToOne(type=>photo, photo=>photo.likes,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'photo_id'})
    photo:photo | null;


    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        
}
