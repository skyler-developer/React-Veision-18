import { Props, Key, Ref } from "shared/ReactTypes";
import { WorkTag } from "./workTags";
import { Flags, NoFlags } from "./fiberFlags";

export class FiberNode {
    type: any;
    tag: WorkTag;
    key: Key;
    stateNode: any;
    pendingProps: Props;
    ref: Ref;

    return: FiberNode | null;
    sibling: FiberNode | null;
    child: FiberNode | null;
    index: number;

    memoizedProps: Props | null;
    alternate: FiberNode | null;
    flags: Flags;

    constructor(tag: WorkTag, pendingProps: Props, key: Key) {
        this.tag = tag;
        this.key = key;

        // 值为真实的dom节点
        this.stateNode = null;

        // 值为Function(组件)本身
        this.type = null;

        // 构成树状结构
        this.return = null;
        this.sibling = null;
        this.child = null;
        this.index = 0;

        this.ref = null;

        // 作为工作单元
        this.pendingProps = pendingProps;
        this.memoizedProps = null;

        this.alternate = null;
        // 副作用
        this.flags = NoFlags;
    }
}
