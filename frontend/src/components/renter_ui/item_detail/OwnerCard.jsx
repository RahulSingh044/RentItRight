const OwnerCard = ({ owner }) => {
  return (
    <div className="rounded-2xl border border-border-custom bg-surface p-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={owner.avatar}
          className="h-10 w-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{owner.name}</p>
          <p className="text-xs text-accent">Profile · Chat</p>
        </div>
      </div>

      <span className="text-sm font-semibold text-accent">
        ★ {owner.rating}
      </span>
    </div>
  );
};

export default OwnerCard;
