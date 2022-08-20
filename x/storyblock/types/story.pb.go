// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: storyblock/story.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Story struct {
	Creator     string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id          uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Keplr       string `protobuf:"bytes,3,opt,name=keplr,proto3" json:"keplr,omitempty"`
	StoryId     string `protobuf:"bytes,4,opt,name=storyId,proto3" json:"storyId,omitempty"`
	BookId      string `protobuf:"bytes,5,opt,name=bookId,proto3" json:"bookId,omitempty"`
	PrevStoryId string `protobuf:"bytes,6,opt,name=prevStoryId,proto3" json:"prevStoryId,omitempty"`
	Height      string `protobuf:"bytes,7,opt,name=height,proto3" json:"height,omitempty"`
	Title       string `protobuf:"bytes,8,opt,name=title,proto3" json:"title,omitempty"`
	Body        string `protobuf:"bytes,9,opt,name=body,proto3" json:"body,omitempty"`
	CreatedAt   string `protobuf:"bytes,10,opt,name=createdAt,proto3" json:"createdAt,omitempty"`
	VoteStatus  string `protobuf:"bytes,11,opt,name=voteStatus,proto3" json:"voteStatus,omitempty"`
}

func (m *Story) Reset()         { *m = Story{} }
func (m *Story) String() string { return proto.CompactTextString(m) }
func (*Story) ProtoMessage()    {}
func (*Story) Descriptor() ([]byte, []int) {
	return fileDescriptor_56e92d6d80d32904, []int{0}
}
func (m *Story) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Story) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Story.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Story) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Story.Merge(m, src)
}
func (m *Story) XXX_Size() int {
	return m.Size()
}
func (m *Story) XXX_DiscardUnknown() {
	xxx_messageInfo_Story.DiscardUnknown(m)
}

var xxx_messageInfo_Story proto.InternalMessageInfo

func (m *Story) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Story) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Story) GetKeplr() string {
	if m != nil {
		return m.Keplr
	}
	return ""
}

func (m *Story) GetStoryId() string {
	if m != nil {
		return m.StoryId
	}
	return ""
}

func (m *Story) GetBookId() string {
	if m != nil {
		return m.BookId
	}
	return ""
}

func (m *Story) GetPrevStoryId() string {
	if m != nil {
		return m.PrevStoryId
	}
	return ""
}

func (m *Story) GetHeight() string {
	if m != nil {
		return m.Height
	}
	return ""
}

func (m *Story) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Story) GetBody() string {
	if m != nil {
		return m.Body
	}
	return ""
}

func (m *Story) GetCreatedAt() string {
	if m != nil {
		return m.CreatedAt
	}
	return ""
}

func (m *Story) GetVoteStatus() string {
	if m != nil {
		return m.VoteStatus
	}
	return ""
}

func init() {
	proto.RegisterType((*Story)(nil), "storyblock.storyblock.Story")
}

func init() { proto.RegisterFile("storyblock/story.proto", fileDescriptor_56e92d6d80d32904) }

var fileDescriptor_56e92d6d80d32904 = []byte{
	// 267 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0xb1, 0x6e, 0xb3, 0x40,
	0x10, 0x84, 0x39, 0x7e, 0xc0, 0x3f, 0x6b, 0x29, 0xc5, 0x29, 0xb1, 0xb6, 0x48, 0x4e, 0x28, 0x95,
	0x2b, 0xbb, 0x48, 0x91, 0x3a, 0xe9, 0xdc, 0x9a, 0x2e, 0x9d, 0xf1, 0x9d, 0x62, 0x04, 0xd2, 0xa1,
	0x63, 0x63, 0x85, 0xb7, 0x48, 0x9f, 0x17, 0x4a, 0xe9, 0x32, 0x65, 0x04, 0x2f, 0x12, 0xb1, 0x10,
	0x41, 0x37, 0xdf, 0xcc, 0xcd, 0x69, 0x77, 0x61, 0x55, 0x93, 0x75, 0x4d, 0x56, 0xda, 0x63, 0xb1,
	0x65, 0xb9, 0xa9, 0x9c, 0x25, 0x2b, 0x6f, 0x26, 0x7f, 0x33, 0xc9, 0xfb, 0x4f, 0x1f, 0xc2, 0xb4,
	0x47, 0x89, 0xb0, 0x38, 0x3a, 0x73, 0x20, 0xeb, 0x50, 0x24, 0x62, 0x1d, 0xef, 0xff, 0x50, 0x5e,
	0x81, 0x9f, 0x6b, 0xf4, 0x13, 0xb1, 0x0e, 0xf6, 0x7e, 0xae, 0xe5, 0x35, 0x84, 0x85, 0xa9, 0x4a,
	0x87, 0xff, 0xf8, 0xdd, 0x00, 0x7d, 0x9f, 0xff, 0xdd, 0x69, 0x0c, 0x86, 0xfe, 0x88, 0x72, 0x05,
	0x51, 0x66, 0x6d, 0xb1, 0xd3, 0x18, 0x72, 0x30, 0x92, 0x4c, 0x60, 0x59, 0x39, 0x73, 0x4e, 0xc7,
	0x56, 0xc4, 0xe1, 0xdc, 0xea, 0x9b, 0x27, 0x93, 0xbf, 0x9e, 0x08, 0x17, 0x43, 0x73, 0xa0, 0x7e,
	0x02, 0xca, 0xa9, 0x34, 0xf8, 0x7f, 0x98, 0x80, 0x41, 0x4a, 0x08, 0x32, 0xab, 0x1b, 0x8c, 0xd9,
	0x64, 0x2d, 0x6f, 0x21, 0xe6, 0x35, 0x8c, 0x7e, 0x22, 0x04, 0x0e, 0x26, 0x43, 0x2a, 0x80, 0xb3,
	0x25, 0x93, 0xd2, 0x81, 0xde, 0x6a, 0x5c, 0x72, 0x3c, 0x73, 0x9e, 0x1f, 0xbf, 0x5a, 0x25, 0x2e,
	0xad, 0x12, 0x3f, 0xad, 0x12, 0x1f, 0x9d, 0xf2, 0x2e, 0x9d, 0xf2, 0xbe, 0x3b, 0xe5, 0xbd, 0xdc,
	0xcd, 0xce, 0xfc, 0xbe, 0x9d, 0x01, 0x35, 0x95, 0xa9, 0xb3, 0x88, 0x8f, 0xfe, 0xf0, 0x1b, 0x00,
	0x00, 0xff, 0xff, 0x17, 0x26, 0x6b, 0xe9, 0x8e, 0x01, 0x00, 0x00,
}

func (m *Story) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Story) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Story) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.VoteStatus) > 0 {
		i -= len(m.VoteStatus)
		copy(dAtA[i:], m.VoteStatus)
		i = encodeVarintStory(dAtA, i, uint64(len(m.VoteStatus)))
		i--
		dAtA[i] = 0x5a
	}
	if len(m.CreatedAt) > 0 {
		i -= len(m.CreatedAt)
		copy(dAtA[i:], m.CreatedAt)
		i = encodeVarintStory(dAtA, i, uint64(len(m.CreatedAt)))
		i--
		dAtA[i] = 0x52
	}
	if len(m.Body) > 0 {
		i -= len(m.Body)
		copy(dAtA[i:], m.Body)
		i = encodeVarintStory(dAtA, i, uint64(len(m.Body)))
		i--
		dAtA[i] = 0x4a
	}
	if len(m.Title) > 0 {
		i -= len(m.Title)
		copy(dAtA[i:], m.Title)
		i = encodeVarintStory(dAtA, i, uint64(len(m.Title)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.Height) > 0 {
		i -= len(m.Height)
		copy(dAtA[i:], m.Height)
		i = encodeVarintStory(dAtA, i, uint64(len(m.Height)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.PrevStoryId) > 0 {
		i -= len(m.PrevStoryId)
		copy(dAtA[i:], m.PrevStoryId)
		i = encodeVarintStory(dAtA, i, uint64(len(m.PrevStoryId)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.BookId) > 0 {
		i -= len(m.BookId)
		copy(dAtA[i:], m.BookId)
		i = encodeVarintStory(dAtA, i, uint64(len(m.BookId)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.StoryId) > 0 {
		i -= len(m.StoryId)
		copy(dAtA[i:], m.StoryId)
		i = encodeVarintStory(dAtA, i, uint64(len(m.StoryId)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Keplr) > 0 {
		i -= len(m.Keplr)
		copy(dAtA[i:], m.Keplr)
		i = encodeVarintStory(dAtA, i, uint64(len(m.Keplr)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintStory(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintStory(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintStory(dAtA []byte, offset int, v uint64) int {
	offset -= sovStory(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Story) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovStory(uint64(m.Id))
	}
	l = len(m.Keplr)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	l = len(m.StoryId)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	l = len(m.BookId)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	l = len(m.PrevStoryId)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	l = len(m.Height)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	l = len(m.Title)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	l = len(m.Body)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	l = len(m.CreatedAt)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	l = len(m.VoteStatus)
	if l > 0 {
		n += 1 + l + sovStory(uint64(l))
	}
	return n
}

func sovStory(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozStory(x uint64) (n int) {
	return sovStory(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Story) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowStory
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Story: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Story: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Keplr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Keplr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StoryId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.StoryId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BookId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BookId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PrevStoryId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PrevStoryId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Height", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Height = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Title", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Title = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Body", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Body = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreatedAt", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CreatedAt = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field VoteStatus", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStory
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStory
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStory
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.VoteStatus = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipStory(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthStory
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipStory(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowStory
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowStory
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowStory
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthStory
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupStory
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthStory
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthStory        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowStory          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupStory = fmt.Errorf("proto: unexpected end of group")
)
